type ClientPrincipal = {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
}

type AuthUser = {
    clientPrincipal: ClientPrincipal;
}
