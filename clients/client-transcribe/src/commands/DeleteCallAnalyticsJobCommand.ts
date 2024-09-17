// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCallAnalyticsJobRequest, DeleteCallAnalyticsJobResponse } from "../models/models_0";
import { de_DeleteCallAnalyticsJobCommand, se_DeleteCallAnalyticsJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCallAnalyticsJobCommand}.
 */
export interface DeleteCallAnalyticsJobCommandInput extends DeleteCallAnalyticsJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCallAnalyticsJobCommand}.
 */
export interface DeleteCallAnalyticsJobCommandOutput extends DeleteCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Deletes a Call Analytics job. To use this operation, specify the name of the job you
 *             want to delete using <code>CallAnalyticsJobName</code>. Job names are case
 *             sensitive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteCallAnalyticsJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // DeleteCallAnalyticsJobRequest
 *   CallAnalyticsJobName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCallAnalyticsJobCommandInput - {@link DeleteCallAnalyticsJobCommandInput}
 * @returns {@link DeleteCallAnalyticsJobCommandOutput}
 * @see {@link DeleteCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link DeleteCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 * @public
 */
export class DeleteCallAnalyticsJobCommand extends $Command
  .classBuilder<
    DeleteCallAnalyticsJobCommandInput,
    DeleteCallAnalyticsJobCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "DeleteCallAnalyticsJob", {})
  .n("TranscribeClient", "DeleteCallAnalyticsJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCallAnalyticsJobCommand)
  .de(de_DeleteCallAnalyticsJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCallAnalyticsJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteCallAnalyticsJobCommandInput;
      output: DeleteCallAnalyticsJobCommandOutput;
    };
  };
}
