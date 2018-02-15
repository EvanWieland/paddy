function paddy(padLength, padEntity){
    return new Array((padLength || 0) + 1).join(padEntity || ' ');
}
