from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from blog import token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login") # tokenUrl is the endpoint where the token is generated or fetched


def get_current_user(data: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    ) # This is used to raise an exception if the credentials are not valid

    return token.verify_token(data, credentials_exception) # This is used to verify the token and return the user data