import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "portal.sso.ap-northeast-1.amazonaws.com",
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "portal.sso.ap-northeast-2.amazonaws.com",
    signingRegion: "ap-northeast-2",
  },
  "ap-south-1": {
    hostname: "portal.sso.ap-south-1.amazonaws.com",
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "portal.sso.ap-southeast-1.amazonaws.com",
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "portal.sso.ap-southeast-2.amazonaws.com",
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "portal.sso.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "eu-central-1": {
    hostname: "portal.sso.eu-central-1.amazonaws.com",
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "portal.sso.eu-north-1.amazonaws.com",
    signingRegion: "eu-north-1",
  },
  "eu-west-1": {
    hostname: "portal.sso.eu-west-1.amazonaws.com",
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "portal.sso.eu-west-2.amazonaws.com",
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "portal.sso.eu-west-3.amazonaws.com",
    signingRegion: "eu-west-3",
  },
  "sa-east-1": {
    hostname: "portal.sso.sa-east-1.amazonaws.com",
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "portal.sso.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "portal.sso.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "us-gov-west-1": {
    hostname: "portal.sso.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "us-west-2": {
    hostname: "portal.sso.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "portal.sso.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "portal.sso.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "portal.sso.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "portal.sso.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "portal.sso.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "awsssoportal",
    regionHash,
    partitionHash,
  });
