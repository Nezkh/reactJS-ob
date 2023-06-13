import { CLIENT } from "./client.enum";
import { PROJECT } from "./project.enum";

export class Time {
    client = CLIENT;
    project = PROJECT;
    task = '';
    user = '';
    hours = '';

    constructor(client, project, task, user, hours){
        this.client = client;
        this.project = project;
        this.task = task;
        this.user = user;
        this.hours = hours;
    }
}