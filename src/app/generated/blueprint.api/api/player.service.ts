/*
 Copyright 2022 Carnegie Mellon University. All Rights Reserved.
 Released under a MIT (SEI)-style license. See LICENSE.md in the
// project root for license information.
*/

/**
 * Blueprint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { PlayerApiClientTeam } from '../model/playerApiClientTeam';
import { PlayerApiClientUser } from '../model/playerApiClientUser';
import { PlayerApiClientView } from '../model/playerApiClientView';

import { BASE_PATH }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Adds Player View Teams to MSEL
     * Adds the Player View&#39;s Teams to the specified MSEL.
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
     public addViewTeamsToMsel(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public addViewTeamsToMsel(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public addViewTeamsToMsel(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public addViewTeamsToMsel(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling addViewTeamsToMsel.');
         }

         let headers = this.defaultHeaders;

         // authentication (oauth2) required
         if (this.configuration.accessToken) {
             const accessToken = typeof this.configuration.accessToken === 'function'
                 ? this.configuration.accessToken()
                 : this.configuration.accessToken;
             headers = headers.set('Authorization', 'Bearer ' + accessToken);
         }

         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected !== undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }

         // to determine the Content-Type header
         const consumes: string[] = [
         ];

         return this.httpClient.put<any>(`${this.configuration.basePath}/api/views/teams/msels/${encodeURIComponent(String(id))}`,
             null,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }

     /**
     * GetTeam Users
     * Returns a list of the Team&#39;s Users.
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getViewTeamUsers(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerApiClientUser>>;
    public getViewTeamUsers(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerApiClientUser>>>;
    public getViewTeamUsers(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerApiClientUser>>>;
    public getViewTeamUsers(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getViewTeamUsers.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<PlayerApiClientUser>>(`${this.configuration.basePath}/api/views/teams/${encodeURIComponent(String(id))}/users`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get View Teams
     * Returns a list of the View&#39;s Teams.
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getViewTeams(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerApiClientTeam>>;
    public getViewTeams(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerApiClientTeam>>>;
    public getViewTeams(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerApiClientTeam>>>;
    public getViewTeams(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getViewTeams.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<PlayerApiClientTeam>>(`${this.configuration.basePath}/api/views/${encodeURIComponent(String(id))}/teams`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all Views
     * Returns a list of all of the Views.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getViews(observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerApiClientView>>;
    public getViews(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerApiClientView>>>;
    public getViews(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerApiClientView>>>;
    public getViews(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<PlayerApiClientView>>(`${this.configuration.basePath}/api/views`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
