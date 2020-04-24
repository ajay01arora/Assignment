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
    constructor (stateName : string, stateCode:string, districtList: IDistrict[]) {
        this.stateName=stateName;
        this.stateCode=stateCode;
        this.districtList=districtList;
    }
    stateName: string;
    stateCode: string;
    districtList: IDistrict[];

}

export class District implements IDistrict
{
    constructor(districtName: string,  totalCases: number,active: number,recovered: number, deceased: number){
        this.districtName=districtName;
        this.totalCases=totalCases;
        this.recovered=recovered;
        this.deceased=deceased
    }
    districtName: string;
    totalCases: number;
    active: number;
    recovered: number;
    deceased: number;
    }