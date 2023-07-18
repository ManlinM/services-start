# What I learned
## Angular Dependency Injector
### what is dependency?
    - classes of ours will depend on
        - such as the new-account component DEPEND ON the LoggingService because we want to call a method in
          the LoggingService
### Injector
    - Dependency injector inject the dependency, the instance of the Service class, into our component automatically

### How?
    - Inform the Angular that the service instance is required
        - add a constructor to the component that want to use the service
            - pass in the service with the type of the service
            - import the service
        - Provide the service
            - tell Angular how to create the instance of such service
            - add providers property to the @Component decorator
                - which takes an array, specify the service type
        **OR
        - Use @Injectable annotation in the service with property 'providedIn: 'root''
## Hierarchical Injector
    - Angular's injector is hierarchical
        - which means if the service is provided in one component, the instance of the service
        is created for the current component and its child components
        - which means if the service is provided in the App Module, the whole application will have
        the access of such service without using @Injectable
    - @Injectable
        - when using the decorator, along with the  'providedIn: 'root'', it automatically makes the services
        avaible throughout the whole application, which is the same effect as above

#### Injecting Service into Service
    - A service can be injected into another service, and is the same way as injecting it into components