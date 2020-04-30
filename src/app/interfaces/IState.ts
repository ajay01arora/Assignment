export interface IState
{
    stateName : string;
    stateCode: string;
    districtList : IDistrict[];

}

export interface IDistrict
{
    districtName : string;
    totalCases : number;
    active : number;
    recovered: number;
    deceased : number;
}

export class State implements IState
{
    constructor (stateName : string, stateCode:string, districtList: IDistrict[]) {}
    stateName: string;
    stateCode: string;
    districtList: IDistrict[];

}

export class District implements IDistrict
{
    constructor(districtName: string,  totalCases: number,active: number,recovered: number, deceased: number){}
        districtName: string;
        totalCases: number;
        active: number;
        recovered: number;
        deceased: number;
}