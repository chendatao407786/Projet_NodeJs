import React, { Component } from 'react';
import PluginItem from './pluginItem';
require('./css/index.css');
class PluginList extends Component {

    constructor(pros) {
        super(pros);
        this.state = {
            plugins: []
        }
    }
    getPluginListData = () => {
        fetch('/api/plugin')
            .then(res => {
                return res.json()
            }).then(res => {
                let newData = [];
                res.forEach(element => {
                    newData.push(element);
                });
                this.setState({
                    plugins: newData
                }, () => console.log(this.state))
            })
    }
    componentWillMount() {
        console.log("Component will mount");
        this.getPluginListData();
    }
    render() {
        let listPlugins = this.state.plugins.map((element, index) => {
            return <PluginItem isEmpty="false" plugin={element} key={index}></PluginItem> 
        })
        return (

            <div className="body">
                <div className="titres">
                    <h2>Inspiration in all the Classics</h2>
                    <span className="sub-description">All the famous stompboxes, FX, synths, sequencers and amps that made history</span>
                </div>
                <div className="listPlugins">
                    {listPlugins}
                    <PluginItem isEmpty="true"></PluginItem>
                    <PluginItem isEmpty="true"></PluginItem>
                </div>
            </div>
        )
    }
}

export default PluginList;