class ApiFeatures{
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search(){
    let keyword = this.queryStr.keyword ?{
      name:{
        $regex: this.queryStr.keyword,
        $options: 'i'
      }    
    }:{};

    this.query.find({...keyword});
    return this;
  }


//   filter(){
//     const queryStrCopy = {...this.queryStr};
//     //before
//     //console.log(queryStrCopy);
  
//     //removing fields from query
//     const removeField = ['keyword', 'limit','page'];
//     removeField.forEach(field=> delete queryStrCopy[field]);
  
//     console.log(queryStrCopy);

//     let queryStr = JSON.stringify(queryStrCopy);
//     console.log(queryStr);
//     queryStr = queryStr.replace(/\b(gt|gte|lte|lt)/g, match => '$'+match);

//     console.log(queryStr);
//     console.log(JSON.parse(queryStr));

//     this.query.find(JSON.parse(queryStr));

//     return this;
  
//   }

//   paginate(resPerPage){
//     const currentPage = Number(this.queryStr.page) || 1;
//     const skip = resPerPage * (currentPage - 1);
//     console.log(skip);
//     //this.query.limit(resPerPage.skip(skip));

//     return this;
//   }
}



module.exports = ApiFeatures;