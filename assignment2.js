let url = "https://api.freeapi.app/api/v1/public/youtube/videos"

let main_div = document.getElementById('main_div')

fetch(url)
    .then((data) => data.json())
    .then((data) => {

        //Here I am looping over every element of "data.data.data" array which has the video info as objects
        //Then I retrieve the required thumbnail link,youtube video link and the channeltitle name from the array
        //Then I make a "video_div" for each video
        //Then i append a a_tag containing the thumbnail and with href as the youtube link
        //then i append the title of the particular video to the videodiv
        //and finally i append the channel title
        (data.data.data).forEach((element) => {

            let video_div = document.createElement('div')
            video_div.className = "video_div"

            let thumbnail = document.createElement('img')
            thumbnail.className = "thumbnail"
            thumbnail.style.width = "320px"
            thumbnail.src = element.items.snippet.thumbnails.maxres.url

            let a_tag = document.createElement('a')//a tag will contain the image(thumbnail) which when clicked,we will be redirected to the youtube video link 
            a_tag.href = `https://www.youtube.com/watch?v=${element.items.id}`
            a_tag.appendChild(thumbnail)
            video_div.appendChild(a_tag)

            let title = document.createElement('h3')
            title.className = "title"
            title.innerText = element.items.snippet.title
            video_div.appendChild(title)

            let channelTitle_tag = document.createElement('h4')
            channelTitle_tag.className = "channel_name"
            channelTitle_tag.innerText = element.items.snippet.channelTitle
            video_div.appendChild(channelTitle_tag)

            main_div.appendChild(video_div)

            // console.log(element.items.snippet.title);//title of the video
            // console.log(element.items.snippet.thumbnails.maxres.url);//link for the thumbnail image
            // console.log(`https://www.youtube.com/watch?v=${element.items.id}`);
            // console.log("");

        })

    })

let search_button = document.getElementById('search_button')
let input = document.getElementById('search_box')

//here the search button searches for the searched value(ie the input_value) with the texts of all the video_divs 
//wherever the searched string is included in the inner text of the video_div then we kepp it and we change the display of all other video_divs to display "none"

search_button.addEventListener('click', function () {
    let input_value = input.value.toLowerCase()
    let video_divs = document.getElementsByClassName('video_div')
    video_divs_array = Array.from(video_divs)

    video_divs_array.forEach((video_div) => {
            video_div.style.display = "block"
    })

    video_divs_array.forEach((video_div) => {
        if (!(video_div.children[1].innerText.toLowerCase().includes(input_value)))
            video_div.style.display = "none"
    })

})


window.addEventListener('keyup', function () {
    let input_value = input.value.toLowerCase()
    let video_divs = document.getElementsByClassName('video_div')
    video_divs_array = Array.from(video_divs)

    video_divs_array.forEach((video_div) => {
            video_div.style.display = "block"
    })

    video_divs_array.forEach((video_div) => {
        if (!(video_div.children[1].innerText.toLowerCase().includes(input_value)))
            video_div.style.display = "none"
    })

})













