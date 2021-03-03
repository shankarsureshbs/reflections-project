'use strict';
import { environment } from '../environments/environment';

const HostName = environment.apibaseUrl;

export const loginURL = `${HostName}/reflex/api.php`;
