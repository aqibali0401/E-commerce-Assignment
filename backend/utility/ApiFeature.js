class ApiFeature{
    constructor(query,queryString){
        this.query= query,
        this.queryString= queryString
    }
    filter(){
        const queryObj = {...this.queryString};
        let queryStr = JSON.stringify(queryObj);
        console.log(queryObj);

        queryStr= queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    sort(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            console.log(sortBy);
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort('name');
        }
        return this
    }
    pagination(){
        const page = this.queryString.page*1 || 1;
        const limits = this.queryString.limit*1 || 100;
        const skip = (page-1)* limits;

        this.query = this.query.skip(skip).limit(limits);
        return this;
    }
}

module.exports = ApiFeature