import {Import} from "../Import";
import {Structure} from "./Structure";
import {IndentedSection} from "../IndentedSection";
import {hasStreamingBody} from "./helpers";
import {GENERIC_STREAM_TYPE} from '../../constants';
import {
    ParameterSuppressionCustomizationDefinition,
    RuntimeTarget,
    SyntheticParameterCustomizationDefinition,
    TreeModelStructure,
} from '@aws/build-types';
import {
    INPUT_CONTROL_PROPERTIES,
    INPUT_TYPES_IMPORT_BROWSER,
    INPUT_TYPES_IMPORT_NODE,
    INPUT_TYPES_IMPORT_UNIVERSAL,
} from './constants';

export class Input extends Structure {
    constructor(
        shape: TreeModelStructure,
        private readonly runtime: RuntimeTarget,
        customizations: Array<
            ParameterSuppressionCustomizationDefinition |
            SyntheticParameterCustomizationDefinition
        > = []
    ) {
        super(
            shape,
            customizations.concat(INPUT_CONTROL_PROPERTIES)
        );
    }

    toString(): string {
        const streamType = this.runtime ? ` = ${this.getStreamType()}` : '';
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${hasStreamingBody(this.shape) ? `<StreamType${streamType}>` : ''} {
${new IndentedSection(
    [
        ...(new Map<string, string>(
            this.memberNames
                .map(memberName => [
                    memberName,
                    this.getInterfaceDefinition(memberName)
                ] as [string, string])
                .concat(this.syntheticParameters)
        ).values())
    ].join('\n\n')
)}
}
`.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map<{toString(): string}>(shape => new Import(`./${shape}`, shape))
            .concat(this.environmentImports(), this.customizationImports)
            .join('\n');
    }

    private environmentImports(): Import[] {
        const toImport = [];

        switch (this.runtime) {
            case 'node':
                toImport.push(INPUT_TYPES_IMPORT_NODE);
                if (hasStreamingBody(this.shape)) {
                    toImport.push(new Import('stream', 'Readable'));
                }
                break;
            case 'browser':
                toImport.push(INPUT_TYPES_IMPORT_BROWSER);
                break;
            case 'universal':
                toImport.push(INPUT_TYPES_IMPORT_UNIVERSAL);
                break;
        }

        return toImport;
    }

    private getStreamType() {
        switch (this.runtime) {
            case 'browser':
                return 'ReadableStream';
            case 'node':
                return 'Readable';
            case 'universal':
                return 'Uint8Array';
            default:
                return GENERIC_STREAM_TYPE;
        }
    }
}
