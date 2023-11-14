import React, {useState} from 'react';

const AddMovie = () => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log(title);
    }

    const handleDate = (e) => {
        setDate(e.target.value)
        console.log(date);
    }

    const handleSubmit = (e) => {
        const movie = {
                id: 4,
                title: "Batman", 
                date: "20 Agustus 2006",
                image: "https://www.themoviedb.org/t/p/original/lnWJtG3vmbU7dNJrYfGk08oMAX.jpg"
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input id='title' type='text' value={title} onChange={handleTitle} />
            <input id='date' type='date' value={date} onChange={handleDate} />
            </form>
        </div>
    );
}

export default AddMovie;
