import React, {Component} from 'react';
import i18n from '../i18n';
import theme from '../styles/themes';
import Thumbnail from './Thumbnail';
const {texts} = i18n;

class ThumbnailGrid extends Component{
    constructor(props){
        super(props)

    }
    render(){
        let {list} = this.props.contexts;
        return(
            <div>
                {list&&list.map((item)=>
                    <Thumbnail 
                        key={item.id}
                        title={item.title}
                        image={item.image}/> 
                )}
            </div>
        )
    }
}

export default ThumbnailGrid;