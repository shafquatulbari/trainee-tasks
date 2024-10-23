from typing import Annotated, get_type_hints, get_origin, get_args
from functools import wraps

#decorator
def check_value_range(func):
    @wraps(func)
    def wrapped(number):
        type_hints = get_type_hints(double, include_extras=True)
        hint = type_hints['number']
        if get_origin(hint) is Annotated:
            hint_type, *hint_args = get_args(hint)
            low, high = hint_args[0]
            print (low, high) # 0 100
            if not low <= number <= high:
                raise ValueError(f"Number must be between {low} and {high}")
        return func(number)
    return wrapped

@check_value_range
def double(number: Annotated[int, (0,100)]) -> int:
    return number * 2
    
    
result = double(4)
print(result) # 8