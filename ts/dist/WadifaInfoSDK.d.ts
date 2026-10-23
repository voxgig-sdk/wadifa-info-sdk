import { ConcourEntity } from './entity/ConcourEntity';
import { DatesLimiteEntity } from './entity/DatesLimiteEntity';
import { JoursFeryEntity } from './entity/JoursFeryEntity';
import { SalaryListEntity } from './entity/SalaryListEntity';
import { VacancesScolaireEntity } from './entity/VacancesScolaireEntity';
export type * from './WadifaInfoTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WadifaInfoEntityBase } from './WadifaInfoEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class WadifaInfoSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Concour(entopts?: Record<string, any>): ConcourEntity;
    DatesLimite(entopts?: Record<string, any>): DatesLimiteEntity;
    JoursFery(entopts?: Record<string, any>): JoursFeryEntity;
    SalaryList(entopts?: Record<string, any>): SalaryListEntity;
    VacancesScolaire(entopts?: Record<string, any>): VacancesScolaireEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WadifaInfoSDK;
    tester(testopts?: any, sdkopts?: any): WadifaInfoSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WadifaInfoSDK;
export { stdutil, config, BaseFeature, WadifaInfoEntityBase, WadifaInfoSDK, SDK, };
export type { DirectResult };
