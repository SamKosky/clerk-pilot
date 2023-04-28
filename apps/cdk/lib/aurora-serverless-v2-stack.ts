import * as cdk from "aws-cdk-lib";
import { Aspects } from "aws-cdk-lib";
import {
  InstanceType,
  IpAddresses,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import { CfnDBCluster } from "aws-cdk-lib/aws-rds";
import { Construct } from "constructs";

export class AuroraServerlessV2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a vpc
    const vpc = new Vpc(this, "VPC", {
      ipAddresses: IpAddresses.cidr("10.0.0.0/16"),
      subnetConfiguration: [{ name: "egress", subnetType: SubnetType.PUBLIC }], // only one subnet is needed
      natGateways: 0, // disable NAT gateways
    });

    // create a security group for aurora db
    const dbSecurityGroup = new SecurityGroup(this, "DbSecurityGroup", {
      vpc: vpc, // use the vpc created above
      allowAllOutbound: true, // allow outbound traffic to anywhere
    });

    dbSecurityGroup.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(5432), // allow inbound traffic on port 5432 (postgres)
      "allow inbound traffic from anywhere to the db on port 5432"
    );

    dbSecurityGroup.addIngressRule(
      Peer.ipv4("54.176.149.52/32"),
      Port.tcp(5432), // allow inbound traffic on port 5432 (postgres)
      "allow inbound traffic from Hasura to the db on port 5432"
    );

    // create a db cluster
    // https://github.com/aws/aws-cdk/issues/20197#issuecomment-1117555047
    const dbCluster = new rds.DatabaseCluster(this, "DbCluster", {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_14_3,
      }),
      credentials: rds.Credentials.fromGeneratedSecret("db_admin"),
      instances: 1,
      instanceProps: {
        vpc: vpc,
        instanceType: new InstanceType("serverless"),
        autoMinorVersionUpgrade: true,
        publiclyAccessible: true,
        securityGroups: [dbSecurityGroup],
        vpcSubnets: vpc.selectSubnets({
          subnetType: SubnetType.PUBLIC, // use the public subnet created above for the db
        }),
      },
      port: 5432, // use port 5432 instead of 3306
    });

    // add capacity to the db cluster to enable scaling
    Aspects.of(dbCluster).add({
      visit(node) {
        if (node instanceof CfnDBCluster) {
          node.serverlessV2ScalingConfiguration = {
            minCapacity: 0.5, // min capacity is 0.5 vCPU
            maxCapacity: 1, // max capacity is 1 vCPU (default)
          };
        }
      },
    });

    // create a cfn output for the api url
    // new CfnOutput(this, 'ApiUrl', {
    //   value: api.url
    // });
  }
}
