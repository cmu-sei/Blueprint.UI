/**
 * Blueprint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SerializationFormat } from './serializationFormat';
import { DataSet } from './dataSet';
import { DataColumn } from './dataColumn';
import { CultureInfo } from './cultureInfo';
import { IContainer } from './iContainer';
import { ISite } from './iSite';


export interface DataTable { 
    container?: IContainer;
    readonly designMode?: boolean;
    caseSensitive?: boolean;
    readonly isInitialized?: boolean;
    remotingFormat?: SerializationFormat;
    readonly childRelations?: Array<any> | null;
    readonly columns?: Array<any> | null;
    readonly constraints?: Array<any> | null;
    dataSet?: DataSet;
    readonly defaultView?: Array<any> | null;
    displayExpression?: string | null;
    readonly extendedProperties?: { [key: string]: any; } | null;
    readonly hasErrors?: boolean;
    locale?: CultureInfo;
    minimumCapacity?: number;
    readonly parentRelations?: Array<any> | null;
    primaryKey?: Array<DataColumn> | null;
    readonly rows?: Array<any> | null;
    tableName?: string | null;
    namespace?: string | null;
    prefix?: string | null;
    site?: ISite;
}

