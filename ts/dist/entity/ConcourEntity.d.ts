import { WadifaInfoEntityBase } from '../WadifaInfoEntityBase';
import type { WadifaInfoSDK } from '../WadifaInfoSDK';
import type { Control } from '../types';
import type { Concour, ConcourListMatch } from '../WadifaInfoTypes';
declare class ConcourEntity extends WadifaInfoEntityBase<Concour> {
    constructor(client: WadifaInfoSDK, entopts: any);
    make(this: ConcourEntity): ConcourEntity;
    list(this: any, reqmatch?: ConcourListMatch, ctrl?: Control): Promise<ConcourEntity[]>;
}
export { ConcourEntity };
