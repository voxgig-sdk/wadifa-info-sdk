import { WadifaInfoEntityBase } from '../WadifaInfoEntityBase';
import type { WadifaInfoSDK } from '../WadifaInfoSDK';
import type { Control } from '../types';
import type { VacancesScolaire, VacancesScolaireListMatch } from '../WadifaInfoTypes';
declare class VacancesScolaireEntity extends WadifaInfoEntityBase<VacancesScolaire> {
    constructor(client: WadifaInfoSDK, entopts: any);
    make(this: VacancesScolaireEntity): VacancesScolaireEntity;
    list(this: any, reqmatch?: VacancesScolaireListMatch, ctrl?: Control): Promise<VacancesScolaireEntity[]>;
}
export { VacancesScolaireEntity };
