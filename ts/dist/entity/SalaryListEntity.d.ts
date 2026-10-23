import { WadifaInfoEntityBase } from '../WadifaInfoEntityBase';
import type { WadifaInfoSDK } from '../WadifaInfoSDK';
import type { Control } from '../types';
import type { SalaryList, SalaryListListMatch } from '../WadifaInfoTypes';
declare class SalaryListEntity extends WadifaInfoEntityBase<SalaryList> {
    constructor(client: WadifaInfoSDK, entopts: any);
    make(this: SalaryListEntity): SalaryListEntity;
    list(this: any, reqmatch?: SalaryListListMatch, ctrl?: Control): Promise<SalaryListEntity[]>;
}
export { SalaryListEntity };
