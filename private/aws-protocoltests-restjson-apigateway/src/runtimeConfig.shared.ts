// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core";
import { NoOpLogger } from "@smithy/smithy-client";
import { IdentityProviderConfig } from "@smithy/types";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { APIGatewayClientConfig } from "./APIGatewayClient";
import { defaultAPIGatewayHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: APIGatewayClientConfig) => {
  return {
    apiVersion: "2015-07-09",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultAPIGatewayHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
    serviceId: config?.serviceId ?? "API Gateway",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
