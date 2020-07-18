import 'reflect-metadata';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import HttpService from '../services/core/http/http.service';

// Initialize DI/IoC container
const container = new Container();
const { lazyInject } = getDecorators(container);

interface InversifyConfig {
    config: {
        baseUrl?: string;
    };
}

function initialize(app?: InversifyConfig) {
    if (!container.isBound(HttpService)) {
        // Initialize services if container is not configured before
        container.bind(HttpService).toSelf().inSingletonScope().onActivation((context: any, instance: any) => {
            app?.config.baseUrl ? instance.setup(app.config.baseUrl) : null;
            return instance;
        });
    }

    //// Initialize services
    //container.bind(ConfigurationService).toSelf().inSingletonScope().onActivation((context, instance) => {
    //    var config = instance.current();
    //    return instance;
    //});

    //container.bind(PreferencesService).toSelf().inSingletonScope().onActivation((context, instance) => {
    //    var prefs = instance.current();
    //    return instance;
    //});
}

export { lazyInject as resolve, container, initialize };
