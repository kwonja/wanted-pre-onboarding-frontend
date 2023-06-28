//utils에는 짧게 반복하는 함수들이 모인다
export const getLocalStorageToken = () =>{
    const token = localStorage.getItem('access_token')
    return token;
}

export const setLocalStorage = (token) =>{
    localStorage.setItem('access_token',token)
}
