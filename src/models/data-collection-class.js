'use strict';


class ModelInterface{

  constructor(model){
    this.model = model;
  }


  read(id){
    if(id){
      return this.model.find({_id: id});
    } else {
      return this.model.find({});
    }
  }
  
  async create(newObj){
    const document = await new this.model(newObj);
    return document.save();
  }

  update(id, newObj){
    return this.model.findOneAndUpdate({_id: id}, {type: newObj.type, cuisine: newObj.cuisine})
  }

  destroy(id){
    return this.model.findOneAndDelete({_id: id});
  }
}


module.exports = ModelInterface;