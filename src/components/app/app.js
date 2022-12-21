import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import ModalWindow from "../modal-window";
import FetchData from "../../fetch-data/fetch-data";
import Loader from "../loader";
import ErrorMessage from "../errorMsg"


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchValue: "",
            filter: "",
            modalVisible: false,
            modal: [],
            loader: true,
            errormsg: false
        }

        // this.getAllData(); // instead of this, we used componentDidMount()
        // Bindings
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);

    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index +1);

            const newData = [...before, ...after];

            return {
                data: newData
            }
        });
        
    }

    addItem(text) {
        const newItem = {
            first_name: text,
            important: false,
            id: this.id++
        }

        this.setState(({data}) => {
            const newArray = [...data, newItem];

            return {
                data: newArray
            }
        })

    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const impBefore = data[index];
            const newImportant = {...impBefore, important: !impBefore.important};

            const newImportantData = [...data.slice(0, index) , newImportant, ...data.slice(index +1)];

            return {
                data: newImportantData
            }
        });
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elements => elements.id === id);

            const likeBefore = data[index];
            const newLike = {...likeBefore, like: !likeBefore.like};

            const newLikeData = [...data.slice(0, index) , newLike, ...data.slice(index +1)];

            return {
                data: newLikeData
            }
        });
    }

    searchPost(items, searchValue) {
        if(searchValue.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.first_name.indexOf(searchValue) > -1
        })
    }

    onUpdateSearchPanel(value) {
        this.setState({
            searchValue: value
        })
    }


    filterPost(items, filter) {
        if(filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateFilter(value) {
        this.setState({
            filter: value
        })
    }

    // FetchData

    getdata = new FetchData();

    modalData = (data) => {
        this.setState({
            modal: data
        })
    }


    onError = () => {
        this.setState({
            errormsg: true,
            loader: false
        })
    }

    onOpenWindow = (id) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })

        this.getdata.getPostById(id)
        .then(singleData => {
            this.modalData(singleData.data)
        })
        .catch(this.onError)
    };

    onOpenFullWindow = (id) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })

        this.getdata.getPostByIdFull(id)
        .then(singleData => {
            this.modalData(singleData)
        })
        .catch(this.onError)
    };

    onCloseWindow = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            modal: []
        })
    }

    

    componentDidMount() {
        this.getdata.getAllPosts()
        .then(alldata => {
            this.setState({
                data: alldata.data,
                loader: false
            })
        })
        .catch(this.onError)
    }

    render() {

        const{data, searchValue, filter, modalVisible, modal, loader, errormsg} = this.state;
        
        const searchPost = this.filterPost(this.searchPost(data, searchValue), filter);
        const likes = data.filter(item => item.like).length;
        const allItems = searchPost.length;

        const spinner = loader ? <Loader/> : null;
        const error = errormsg ? <ErrorMessage/> : null;
        const content = !(errormsg | loader) ? <PostList 
                                                    posts={searchPost}
                                                    onDelete={this.onDelete}
                                                    onToggleImportant={this.onToggleImportant}
                                                    onToggleLike={this.onToggleLike}
                                                    onOpenWindow={this.onOpenWindow}
                                                    onOpenFullWindow={this.onOpenFullWindow}
                                                /> : null
    

        return (
        <div className="container blockPanel">
            
            <AppHeader 
            allPosts={allItems}
            likes={likes}
            />
            <div className="search-panel d-flex">
                <SearchPanel
                onUpdateSearchPanel={this.onUpdateSearchPanel}
                />
                <PostStatusFilter
                filter={filter}
                onUpdateFilter={this.onUpdateFilter}
                />
                
            </div>
            {spinner}
            {error}
            {content}
            <PostAddForm
                addItem={this.addItem}
            />
            <ModalWindow
                modalVisible={modalVisible}
                onCloseWindow = {this.onCloseWindow}
                modalContent={modal}
            />
        </div>
        )
    }


}


