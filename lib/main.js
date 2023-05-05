"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
// import * as github from '@actions/github';
// import { Storage, File, Bucket } from '@google-cloud/storage';
// import { withFile as withTemporaryFile } from 'tmp-promise';
// import { ObjectMetadata } from './gcs-utils';
// import { getInputs } from './inputs';
// import { CacheHitKindState, saveState } from './state';
const tar_utils_1 = require("./tar-utils");
// async function getBestMatch(
//   bucket: Bucket,
//   key: string,
//   restoreKeys: string[],
// ): Promise<[File, Exclude<CacheHitKindState, 'none'>] | [null, 'none']> {
//   const folderPrefix = `${github.context.repo.owner}/${github.context.repo.repo}`;
//   core.debug(`Will lookup for the file ${folderPrefix}/${key}.tar`);
//   const exactFile = bucket.file(`${folderPrefix}/${key}.tar`);
//   const [exactFileExists] = await exactFile.exists().catch((err) => {
//     core.error('Failed to check if an exact match exists');
//     throw err;
//   });
//   core.debug(`Exact file name: ${exactFile.name}.`);
//   if (exactFileExists) {
//     console.log(`🙌 Found exact match from cache for key '${key}'.`);
//     return [exactFile, 'exact'];
//   } else {
//     console.log(`🔸 No exact match found for key '${key}'.`);
//   }
//   const bucketFiles = await bucket
//     .getFiles({
//       prefix: `${folderPrefix}/${restoreKeys[restoreKeys.length - 1]}`,
//     })
//     .then(([files]) =>
//       files.sort(
//         (a, b) =>
//           new Date((b.metadata as ObjectMetadata).updated).getTime() -
//           new Date((a.metadata as ObjectMetadata).updated).getTime(),
//       ),
//     )
//     .catch((err) => {
//       core.error('Failed to list cache candidates');
//       throw err;
//     });
//   if (core.isDebug()) {
//     core.debug(
//       `Candidates: ${JSON.stringify(
//         bucketFiles.map((f) => ({
//           name: f.name,
//           metadata: {
//             updated: (f.metadata as ObjectMetadata).updated,
//           },
//         })),
//       )}.`,
//     );
//   }
//   for (const restoreKey of restoreKeys) {
//     const foundFile = bucketFiles.find((file) =>
//       file.name.startsWith(`${folderPrefix}/${restoreKey}`),
//     );
//     if (foundFile) {
//       console.log(`🤝 Found match from cache for restore key '${restoreKey}'.`);
//       return [foundFile, 'partial'];
//     } else {
//       console.log(
//         `🔸 No cache candidate found for restore key '${restoreKey}'.`,
//       );
//     }
//   }
//   return [null, 'none'];
// }
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const compressionMethod = yield (0, tar_utils_1.getTarCompressionMethod)();
        console.log(compressionMethod);
    });
}
void main().catch((err) => {
    core.error(err);
    core.setFailed(err);
});
