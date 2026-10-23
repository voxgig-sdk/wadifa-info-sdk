import { WadifaInfoEntityBase } from '../WadifaInfoEntityBase';
import type { WadifaInfoSDK } from '../WadifaInfoSDK';
import type { Control } from '../types';
import type { JoursFery, JoursFeryListMatch } from '../WadifaInfoTypes';
declare class JoursFeryEntity extends WadifaInfoEntityBase<JoursFery> {
    constructor(client: WadifaInfoSDK, entopts: any);
    make(this: JoursFeryEntity): JoursFeryEntity;
    list(this: any, reqmatch?: JoursFeryListMatch, ctrl?: Control): Promise<JoursFeryEntity[]>;
}
export { JoursFeryEntity };
