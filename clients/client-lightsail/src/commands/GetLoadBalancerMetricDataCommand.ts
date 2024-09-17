// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerMetricDataRequest, GetLoadBalancerMetricDataResult } from "../models/models_1";
import { de_GetLoadBalancerMetricDataCommand, se_GetLoadBalancerMetricDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoadBalancerMetricDataCommand}.
 */
export interface GetLoadBalancerMetricDataCommandInput extends GetLoadBalancerMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetLoadBalancerMetricDataCommand}.
 */
export interface GetLoadBalancerMetricDataCommandOutput extends GetLoadBalancerMetricDataResult, __MetadataBearer {}

/**
 * <p>Returns information about health metrics for your Lightsail load balancer.</p>
 *          <p>Metrics report the utilization of your resources, and the error counts generated by them.
 *       Monitor and collect metric data regularly to maintain the reliability, availability, and
 *       performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetLoadBalancerMetricDataRequest
 *   loadBalancerName: "STRING_VALUE", // required
 *   metricName: "ClientTLSNegotiationErrorCount" || "HealthyHostCount" || "UnhealthyHostCount" || "HTTPCode_LB_4XX_Count" || "HTTPCode_LB_5XX_Count" || "HTTPCode_Instance_2XX_Count" || "HTTPCode_Instance_3XX_Count" || "HTTPCode_Instance_4XX_Count" || "HTTPCode_Instance_5XX_Count" || "InstanceResponseTime" || "RejectedConnectionCount" || "RequestCount", // required
 *   period: Number("int"), // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None", // required
 *   statistics: [ // MetricStatisticList // required
 *     "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 *   ],
 * };
 * const command = new GetLoadBalancerMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetLoadBalancerMetricDataResult
 * //   metricName: "ClientTLSNegotiationErrorCount" || "HealthyHostCount" || "UnhealthyHostCount" || "HTTPCode_LB_4XX_Count" || "HTTPCode_LB_5XX_Count" || "HTTPCode_Instance_2XX_Count" || "HTTPCode_Instance_3XX_Count" || "HTTPCode_Instance_4XX_Count" || "HTTPCode_Instance_5XX_Count" || "InstanceResponseTime" || "RejectedConnectionCount" || "RequestCount",
 * //   metricData: [ // MetricDatapointList
 * //     { // MetricDatapoint
 * //       average: Number("double"),
 * //       maximum: Number("double"),
 * //       minimum: Number("double"),
 * //       sampleCount: Number("double"),
 * //       sum: Number("double"),
 * //       timestamp: new Date("TIMESTAMP"),
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLoadBalancerMetricDataCommandInput - {@link GetLoadBalancerMetricDataCommandInput}
 * @returns {@link GetLoadBalancerMetricDataCommandOutput}
 * @see {@link GetLoadBalancerMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetLoadBalancerMetricDataCommand extends $Command
  .classBuilder<
    GetLoadBalancerMetricDataCommandInput,
    GetLoadBalancerMetricDataCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetLoadBalancerMetricData", {})
  .n("LightsailClient", "GetLoadBalancerMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_GetLoadBalancerMetricDataCommand)
  .de(de_GetLoadBalancerMetricDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoadBalancerMetricDataRequest;
      output: GetLoadBalancerMetricDataResult;
    };
    sdk: {
      input: GetLoadBalancerMetricDataCommandInput;
      output: GetLoadBalancerMetricDataCommandOutput;
    };
  };
}
