import { WadifaInfoEntityBase } from '../WadifaInfoEntityBase';
import type { WadifaInfoSDK } from '../WadifaInfoSDK';
import type { Control } from '../types';
import type { DatesLimite, DatesLimiteLoadMatch } from '../WadifaInfoTypes';
declare class DatesLimiteEntity extends WadifaInfoEntityBase<DatesLimite> {
    constructor(client: WadifaInfoSDK, entopts: any);
    make(this: DatesLimiteEntity): DatesLimiteEntity;
    load(this: any, reqmatch?: DatesLimiteLoadMatch, ctrl?: Control): Promise<DatesLimiteEntity>;
}
export { DatesLimiteEntity };
