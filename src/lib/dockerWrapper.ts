import { DockerVersion } from "dockerode";
import Docker from "dockerode";

/**
 * This class wraps the Docker API.
 */
export default class DockerWrapper {
    #docker: Docker;

    /** Docker API wrapper */
    constructor() {
        const isWindows = process.platform === "win32";
        let options = isWindows ? {
            host: '127.0.0.1',
            port: 2375
        } : {
            socketPath: '/var/run/docker.sock'
        }

        this.#docker = new Docker(options);
    }

    public get docker() : Docker {
        return this.#docker;
    }
    
    /**
     * Returns the detected Docker version.
     * We use that to check whether or not Docker is installed at all.
     * @returns 
     */
    async getDockerVersion(): Promise<string | null> {
        let version: DockerVersion = await this.docker.version()
        return version.Version
    }

    /**
     * Docker may be installed but not currently running. This function checks that it does.
     * @returns 
     */
    async getDockerRunning(): Promise<boolean> {
        try {
            const response: Buffer = await this.docker.ping();
            return response.toString() === 'OK'
        } catch (e) {
            return false
        }
    }
}