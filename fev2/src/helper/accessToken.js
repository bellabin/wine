export const addAccessTokenToLocalStorage = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken)
}
export const getAccessTokenFromLocalStorage = () => {
    return sessionStorage.getItem('accessToken')
}

export const addUserProfileToLS = (payload) => {
    return sessionStorage.setItem('userProfile',JSON.stringify(payload))
}

export const getUserProfileFromLS = () => {
    return sessionStorage.getItem('userProfile')
}