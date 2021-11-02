import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "s3.ap-northeast-1.amazonaws.com",
  },
  "ap-southeast-1": {
    hostname: "s3.ap-southeast-1.amazonaws.com",
  },
  "ap-southeast-2": {
    hostname: "s3.ap-southeast-2.amazonaws.com",
  },
  "aws-global": {
    hostname: "s3.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "eu-west-1": {
    hostname: "s3.eu-west-1.amazonaws.com",
  },
  "fips-ca-central-1": {
    hostname: "s3-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "fips-us-east-1": {
    hostname: "s3-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "fips-us-east-2": {
    hostname: "s3-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "fips-us-gov-east-1": {
    hostname: "s3-fips.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "fips-us-gov-west-1": {
    hostname: "s3-fips.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
  "fips-us-west-1": {
    hostname: "s3-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "fips-us-west-2": {
    hostname: "s3-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "s3-external-1": {
    hostname: "s3-external-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "sa-east-1": {
    hostname: "s3.sa-east-1.amazonaws.com",
  },
  "us-east-1": {
    hostname: "s3.us-east-1.amazonaws.com",
  },
  "us-gov-east-1": {
    hostname: "s3.us-gov-east-1.amazonaws.com",
  },
  "us-gov-west-1": {
    hostname: "s3.us-gov-west-1.amazonaws.com",
  },
  "us-west-1": {
    hostname: "s3.us-west-1.amazonaws.com",
  },
  "us-west-2": {
    hostname: "s3.us-west-2.amazonaws.com",
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
      "aws-global",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-ca-central-1",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "me-south-1",
      "s3-external-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["fips-us-gov-east-1", "fips-us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "s3.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "s3",
    regionHash,
    partitionHash,
  });
