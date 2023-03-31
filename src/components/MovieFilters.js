import React from 'react'

class MovieFilters extends React.Component{

    constructor(props){
        super();
        this.state = {
            selectedRadio: null,
            titleDisabled: null,
            genreDisabled: null,
            yearDisabled: null,
            ratingDisabled: null,
            lessDisabled: null,
            moreDisabled: null,
            inputText: null,
        }
        this.props = props
        this.radioButtonSelected = this.radioButtonSelected.bind(this);
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.processTitleFilter = this.processTitleFilter.bind(this);
        this.saveInputText = this.saveInputText.bind(this);

    }

    async saveInputText(e){
        await this.setState({inputText: e.target.value})
    }

    async handleLessInputs(e){
        await this.setState({inputText: e.target.value, moreDisabled: true})
    }

    async handleMoreInputs(e){
        await this.setState({inputText: e.target.value, lessDisabled: true})
    }

    handleSubmit(){
        let filterType = this.state.selectedRadio;
        let movies = [...this.props.movies]

        if (filterType === 'title'){
            this.processTitleFilter(movies);
        }

        else if (filterType === 'genre'){
            this.processGenreFilter(movies);
        }

        else if (filterType === 'year'){
            this.processYearFilter(movies);
        }

        else if (filterType === 'rating'){
            this.processRatingFilter(movies);
        }

    }

    processTitleFilter(movies){
        let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(this.state.inputText.toLowerCase()))

        this.props.updateList(filteredMovies)
    }

    processGenreFilter(movies){

        let filteredMovies = [];

        movies.forEach((movie)=>{
            movie.details.genres.forEach(genre=>{
                if (genre.name.toLowerCase() === this.state.inputText.toLowerCase()){
                    filteredMovies.push(movie)
                }
            })
        })

        this.props.updateList(filteredMovies)
    }

    processYearFilter(movies){

        // Condition: less input
        if (this.state.moreDisabled === true){
            let filteredMovies = movies.filter(movie => parseInt(movie.release_date.substr(0,4)) < parseInt(this.state.inputText))

            this.props.updateList(filteredMovies)
        }

        // Condition: more input
        else if (this.state.lessDisabled === true){
            let filteredMovies = movies.filter(movie => parseInt(movie.release_date.substr(0,4)) > parseInt(this.state.inputText))

            this.props.updateList(filteredMovies)
        }


    }

    processRatingFilter(movies){

        // Condition: less input
        if (this.state.moreDisabled === true){
            let filteredMovies = movies.filter(movie => parseFloat(movie.ratings.average) < parseFloat(this.state.inputText))

            this.props.updateList(filteredMovies)
        }

        // Condition: more input
        else if (this.state.lessDisabled === true){
            let filteredMovies = movies.filter(movie => parseFloat(movie.ratings.average) > parseFloat(this.state.inputText))

            this.props.updateList(filteredMovies)
        }
    }

    

    radioButtonSelected(value){
        this.setState({
            selectedRadio: value.target.value,
        });

        //Handles disabling other inputs
        switch(value.target.value){
            case 'title':
                this.setState({
                    genreDisabled: true,
                    yearDisabled: true,
                    ratingDisabled: true
                })
            break
            case 'genre':
                this.setState({
                    titleDisabled: true,
                    yearDisabled: true,
                    ratingDisabled: true
                })
            break
            case 'year':
                this.setState({
                    titleDisabled: true,
                    genreDisabled: true,
                    ratingDisabled: true,
                })
            break
            case 'rating':
                this.setState({
                    titleDisabled: true,
                    genreDisabled: true,
                    yearDisabled: true
                })
            break

            default:
                return null
        }
    }

    //Resets all radio buttons & text inputs
    reset(){
        this.setState({
            selectedRadio: null,
            titleDisabled: null,
            genreDisabled: null,
            yearDisabled: null,
            ratingDisabled: null,
        });

        this.clearTitle.reset();
        this.clearGenre.reset();
        this.clearYear.reset();
        this.clearRating.reset();
    }

    render(){
        return(
                <div class="h-screen col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
                <p class="text-2xl text-center font-semibold pb-16">Movie Filters</p>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    {/*TITLE INPUT*/}
                    <div ref={(el) => {this.clearTitle = el;}} class="flex justify-between items-center pb-8">
                        <input disabled={(this.state.titleDisabled) ? "disabled":""} value="title" onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "title"} id="radio-1" type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="radio-1" class="text-2xl font-semibold">Title</label>
                        <input onChange={(e)=> {this.saveInputText(e)}} disabled={(this.state.titleDisabled) ? "disabled":""} id="title" class="searchBar-area"></input>
                    </div>

                    {/*GENRE INPUT*/}
                    <div ref={(el) => {this.clearGenre = el;}} class="flex justify-between items-center pb-8">
                        <input disabled={(this.state.genreDisabled) ? "disabled":""} value="genre" onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "genre"} id="radio-2" type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="radio-2" class="text-2xl font-semibold">Genre</label>
                        <input onChange={(e)=> {this.saveInputText(e)}} disabled={(this.state.genreDisabled) ? "disabled":""} id="genre" class="searchBar-area"></input>
                    </div>

                    {/*YEAR INPUTS*/}
                    <div ref={(el) => {this.clearYear = el;}} class="flex-co justify-between items-center pb-8">

                        <div class="flex justify-between items-center">
                            <input disabled={(this.state.yearDisabled) ? "disabled":""} onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "year"} id="radio-3" type="radio" value="year" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="radio-3" class="text-2xl font-semibold">Year</label>
                            <input disabled={(this.state.yearDisabled) ? "disabled":""} class="searchBar-area invisible"></input>
                        </div>

                        <div class="flex justify-end pt-4">
                            <label for="year-less" class="text-xl font-semibold pr-2">Less</label>
                            <input onChange={(e) => {this.handleLessInputs(e)}} disabled={(this.state.yearDisabled) ? "disabled": this.state.lessDisabled ? "disabled":""} id="year-less" class="searchBar-area"></input>
                        </div>

                        <div class="flex justify-end pt-4">
                            <label for="year-greater" class="text-xl font-semibold pr-2">Greater</label>
                            <input onChange={(e) => {this.handleMoreInputs(e)}} disabled={(this.state.yearDisabled) ? "disabled": this.state.moreDisabled ? "disabled":""} id="year-greater" class="searchBar-area"></input>
                        </div>

                    </div>

                    {/*RATING INPUTS*/}
                    <div ref={(el) => {this.clearRating = el;}} class="flex-co justify-between items-center pb-8">

                        <div class="flex justify-between items-center">
                            <input disabled={(this.state.ratingDisabled) ? "disabled":""} onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "rating"} id="radio-3" type="radio" value="rating" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <label for="radio-3" class="text-2xl font-semibold">Rating</label>
                            <input disabled={(this.state.ratingDisabled) ? "disabled":""} class="searchBar-area invisible"></input>
                        </div>

                        <div class="flex justify-end pt-4">
                            <label for="year-less" class="text-xl font-semibold pr-2">Less</label>
                            <input onChange={(e) => {this.handleLessInputs(e)}} disabled={(this.state.ratingDisabled) ? "disabled": this.state.lessDisabled ? "disabled":""} id="year-less" class="searchBar-area"></input>
                        </div>

                        <div class="flex justify-end pt-4">
                            <label for="year-greater" class="text-xl font-semibold pr-2">Greater</label>
                            <input onChange={(e) => {this.handleMoreInputs(e)}} disabled={(this.state.ratingDisabled) ? "disabled": this.state.moreDisabled ? "disabled":""} id="year-greater" class="searchBar-area"></input>
                        </div>
                    </div>

                    <div class="grid grid-cols-10 pt-4">
                        <button class="col-start-2 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Filter</button>
                        <button onClick={this.reset} class="col-start-7 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Clear</button>
                    </div>
                </form>
            </div>
                
        )}
}

export default MovieFilters