document.getElementById('func').onclick = function(){
    document.querySelector('.container').style.display = 'inline-block'
    document.querySelector('.containers').style.display = 'none'
}
document.getElementById('back').onclick = function(){
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.containers').style.display = 'inline-block'
}

document.getElementById('gg').onclick = function(){
    document.getElementById('ggg').style.display = 'flex'
}
document.getElementById('exit').onclick = function(){
    document.getElementById('ggg').style.display = 'none'

}


// '----------------------------'------------------------------------------------------------------


$('.screens').css('width', '300px')
$('.screens').css('height', '100px')
$('.screens').css('border', '1px solid blue')

const games = {
    level1: {
        boxes: ["./images/level11/student (1).png","./images/level11/pencils.png","./images/level11/student.png","./images/level11/tablet.png" ,"./images/level11/icons8-цитрусовые-94.png","./images/level11/icons8-малина-94.png","./images/level11/crayons.png","./images/level11/blackboard.png", "./images/level11/hot_cup_thanksgiving_thanksgivingmix_drink_icon_230697.png","./images/level11/student (1).png","./images/level11/icons8-клубника-94.png", "./images/level11/icons8-малина-94.png","./images/level11/icons8-банан-94.png", "./images/level11/icons8-цитрусовые-94.png", "./images/level11/tablet.png" ,"./images/level11/icons8-виноград-94.png","./images/level11/crayons.png", "./images/level11/laptop.png", "./images/level11/blackboard.png", "./images/level11/icons8-банан-94.png","./images/level11/student.png","./images/level11/pencils.png","./images/level11/icons8-вишня-94.png", "./images/level11/book.png", "./images/level11/hot_cup_thanksgiving_thanksgivingmix_drink_icon_230697.png", "./images/level11/laptop.png", "./images/level11/icons8-клубника-94.png","./images/level11/book.png", "./images/level11/icons8-виноград-94.png", "./images/level11/icons8-вишня-94.png"]
    },
    level2: {
       boxes: ["./images/level2/animal (1).png",  "./images/level2/3316541_animal_ganco_goose_gooses_icon.png" , "./images/level2/3316547_animal_duck_ducks_pato_icon.png","./images/level2/3316548_animal_fish_fishes_peixe_icon.png","./images/level2/elephant.png", "./images/level2/animal (1).png","./images/level2/animal.png" , "./images/level2/butterfly.png" ,"./images/level2/dog.png", "./images/level2/dolphin.png",  "./images/./level2/zhivotnye_3y05xcf3n1iy_128.png", "./images/level2/zhivotnye_a6fiysisttxm_128.png" , "./images/level2/zhivotnye_90hyq9w5k8xo_128.png" , "./images/level2/animal.png" , "./images/./level2/zhivotnye_3y05xcf3n1iy_128.png","./images/level2/zhivotnye_13tqajcuh3zi_256.png" , "./images/level2/elephant.png",     "./images/level2/3316541_animal_ganco_goose_gooses_icon.png" ,  "./images/level2/3316547_animal_duck_ducks_pato_icon.png","./images/level2/zhivotnye_13tqajcuh3zi_256.png" ,  "./images/level2/3316548_animal_fish_fishes_peixe_icon.png","./images/level2/butterfly.png" , "./images/level2/dog.png", "./images/level2/dolphin.png", "./images/level2/zhivotnye_a6fiysisttxm_128.png" , "./images/level2/zhivotnye_90hyq9w5k8xo_128.png" ,]
    }, 
    level3: {
        boxes: [ "./images/level3/5.png", "./images/level3/10.png",  "./images/level3/1.png", "./images/level3/8.png", "./images/level3/2.png" , "./images/level3/3.png", "./images/level3/4.png" , "./images/level3/5.png", "./images/level3/6.png" , "./images/level3/7.png", "./images/level3/8.png", "./images/level3/9.png", "./images/level3/10.png", "./images/level3/1.png", "./images/level3/2.png" , "./images/level3/3.png", "./images/level3/9.png",  "./images/level3/4.png" , "./images/level3/6.png" ,  "./images/level3/7.png",]
    }
}

let player = {
    level: 1,
    answer: ''
}

function beginGames() {
    document.querySelector('.game').innerHTML = ""
    for (let i = 0; i < games[`level${player.level}`].boxes.length; i++) {
        let html = `
        <div class="card"><img src="${games[`level${player.level}`].boxes[i]}" alt=""><p>${games[`level${player.level}`].boxes[i]}</p></div> 
        `
        document.querySelector('.game').innerHTML += html
    }

    $('p').css('display', 'none')

    
let cash = []
$('.card').click(function () {
    $(this).css('background', 'green')
    if (cash.length === 0) {
        cash.push($(this))
        cash[0].text() = $(this).text()
    }
    if (cash[0].text() === $(this).text()) {
        games[`level${player.level}`].boxes.length = games[`level${player.level}`].boxes.length - 2
        cash[0].css('visibility', 'hidden')
        $(this).css('visibility', 'hidden')
        cash = []
        $('.screens').text('Barakalla')
        $('.screens').css('color', 'white')
        setTimeout(() => {
          $('.screens').text('')
        }, 1000)


    }
    if (games[`level${player.level}`].boxes.length === 0) {
        $('.screens').css('background', 'blue')
        $('.screens').text('')
        let html =`
        <div class="pic"><img src="./images/2320626.png" alt=""></div>
        `
        document.querySelector('.screens').innerHTML += html
        setTimeout(() => {
            $('.screens').css('background', 'transparent')
        }, 2000)
        player.level = player.level + 1

        cash.length = 0
        beginGames()
    }
    else {
        cash[0].css('background', 'red')
        $(this).css('background', 'red')
        setTimeout(() => {
            $('.card').css('background', '#fff')
        }, 1000)
    }


    cash = []
})
}
beginGames()

$('#again').click(function (){
    
    
    player.level = player.level -1 
    beginGames()
})



// '----------------------------------'---------------------------------------------------------------------------------------







const geometry = {
    circumtance: function (r) {
        return 2 * Math.PI * r
    },
    diametr: function (d) {
        return 2 * d
    },
    radius: function (r) {
        return r / 2
    },
}
const RightTriangle = {

    righttriangle: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return Math.pow(a, 2) + Math.pow(b, 2)
    }
}
const square = {
    perimetr: function (a) {
        return 4 * a
    },
    area: function (a) {
        return Math.pow(a, 2)
    },
    c: function (a) {
        return Math.sqrt(2 * a)
    }
}
const Rectangle = {

    perimetr: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return 2 * a + 2 * b
    },
    area: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return a * b
    },

}
const ScaleneTriangle = {
    perimetr: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        let c = Number(document.querySelector('#inp3').value)
        return a + b + c
    },
    area: function () {
        let b = Number(document.querySelector('#inp1').value)
        let h = Number(document.querySelector('#inp2').value)
        return 1 / 2 * b * h
    }
}
const EquilateralTriangle = {
    perimetr: function (a) {
        return 3 * a
    },
    height: function (a) {
        return (Math.sqrt(3) / 2) * a
    },
    area: function (a) {
  
        return (Math.sqrt(3) / 4) * Math.pow(a, 2)
    }

}
const Paralellogram = {
    perimetr: function (a, b) {
        
        return 2 * a + 2 * b
    },
    area: function (b, h) {
       
        return b * h
    }
}
const Hexagon = {
    perimetr: function (a) {
        return 6 * a
    },
    area: function (a, r) {
       
        return 1 / 2 * 6 * a * r
    }
}
const Pentagons = {
    perimetr: function (a) {
        return 5 * a
    },
    area: function (a, r) {
       return 1 / 2 * 5 * a * r
    }
}
const Sphere = {
    area: function (r) {
        return 4 * Math.PI * Math.pow(r, 2)
    },
    Volume: function (r) {
        return 4 / 3 * Math.PI * Math.pow(r, 3)
    }
}
const Esclipse = {
    area: function (a, b) {
        return Math.PI * a * b
    }
}

document.querySelector('.lines').onclick = function () {
    if (document.querySelector('section').classList.contains('hidopt')) {
        document.querySelector('span').style.color = 'black'
        document.querySelector('section').classList.remove('hidopt')
    }
    else {
        document.querySelector('section').classList.add('hidopt')
        document.querySelector('span').style.color = 'white'
    }
}

function handlerButton() {
    let screen = document.querySelector('.screen')
    let input1 = Number(document.getElementById('inp1').value)
    
    let select = document.getElementById('select')
    let sel = document.getElementById('sel')


    if (select.value === 'RightTriangle') {

        if (sel.value === 'righttriangle') {
            screen.textContent = RightTriangle.righttriangle()
        }
    }


    if (select.value === 'ScaleneTriangle') {
        // let input1 = Number(document.getElementById('inp1').value)
        //      let input2 = Number(document.getElementById('inp2').value)
        // let input3 = Number(document.getElementById('inp3').value)


        if (sel.value === 'perimetr') {
            screen.textContent = ScaleneTriangle.perimetr()
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = a + b + c '
        }
        else if (sel.value === 'area') {
            screen.textContent = ScaleneTriangle.area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 1/2 bh '
          
        }

    }


    if (select.value === 'EquilateralTriangle') {

        if (sel.value === 'perimetr') {
            screen.textContent = EquilateralTriangle.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 3 * a'
        }
        else if (sel.value === 'height') {
            screen.textContent = EquilateralTriangle.height(input1)
            document.querySelector('.box1').textContent = 'h = '
            document.querySelector('.formula').textContent = 'h = Math.sqrt(3)/2 * a'
        }
        else {
            screen.textContent = EquilateralTriangle.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = Math.sqrt(3)/4 * Math.pow(a, 2)'
        }

    }

    if (select.value === 'square') {
        
        if (sel.value === 'perimetr') {
            screen.textContent = square.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 4a'
        }
        else if (sel.value === 'area') {
            screen.textContent = square.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = Math.pow(a, 2) '

        }
        else {
            screen.textContent = square.c(input1)
            document.querySelector('.box1').textContent = 'C = '
            document.querySelector('.formula').textContent = 'C = Math.sqrt(2*a) '
        }


    }
    if(select.value === 'Rectangle'){
        if(sel.value === 'perimetr'){
            screen.textContent = Rectangle.perimetr()
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 2a + 2b'
        }
        else{
            screen.textContent = Rectangle.area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = ab'
        }
    }
    if (select.value === 'Paralellogram') {
        let input2 = Number(document.getElementById('inp2').value)
        if (sel.value === 'perimetr') {
            screen.textContent = Paralellogram.perimetr(input1, input2)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 2a + 2b '
        }
        else if (sel.value === 'area') {
            screen.textContent = Paralellogram.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = bh '

        }
        


    }
    if(select.value === 'Hexagon'){
        let input2 = Number(document.querySelector('#inp2').value)
        if(sel.value === 'perimetr'){
            screen.textContent = Hexagon.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 6a'
        }
        else if(sel.value === 'area'){
            screen.textContent = Hexagon.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 1/2 * 6ar '
        }
    }
    if(select.value === 'Pentagons'){
        let input2 = Number(document.querySelector('#inp2').value)
        if(sel.value=== 'perimetr'){
            screen.textContent = Pentagons.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 5a'
        }
        else{
            screen.textContent = Pentagons.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 1/2 * 5ar '
        }
    }
    if(select.value === 'Sphere'){
        if (sel.value === "area"){
            screen.textContent = Sphere.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 4*Math.PI*Math.pow(r, 2) '
        }
        else if(sel.value === 'Volume'){
            screen.textContent = Sphere.Volume(input1)
            document.querySelector('.box1').textContent = 'V = '
            document.querySelector('.formula').textContent = 'V = (4/3)*Math.PI*Math.pow(r, 3) '
        }
    }
    if(select.value === 'Esclipse'){
        let input2 = Number(document.querySelector('#inp2').value)
        if(sel.value === 'area'){
           screen.textContent = Esclipse.area(input1, input2)
           document.querySelector('.box1').textContent = 'A = '
           document.querySelector('.formula').innerHTML = 'A = &pi; * a * b '
        }
     
    }
}

document.querySelector('#select').onclick = function () {


    if (document.querySelector('#select').value === "RightTriangle") {
        let html = `
        <option class="opt1" value="righttriangle">RightTriangle</option>
    `
        document.querySelector('#sel').innerHTML = html
        let scls = `
    <p></p>
    <input type="number" id="inp1">
    <p id="bb"></p>
    <input type="number" id="inp2">
    `
        document.querySelector('.opt').innerHTML = scls

    }

    else if (document.querySelector('#select').value === "ScaleneTriangle") {

        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">Area</option>`
        document.querySelector('#sel').innerHTML = html
        let scls = `
        <p>a</p>
        <input type="number" id="inp1">
        <p id="bb">b</p>
        <input type="number" id="inp2">
        <p id="pp">c</p>
        <input type="number" id="inp3">
    
        `
        document.querySelector('.opt').innerHTML = scls
       
    }
    else if (document.querySelector('#select').value === "EquilateralTriangle") {
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="height">height</option>
        <option  class="opt3" value="area">area</option>`
        document.querySelector('#sel').innerHTML = html
        let slc = `
       <p></p>
       <input type="number" id="inp1">
       `
        document.querySelector('.opt').innerHTML = slc
    }
    else if (document.querySelector('#select').value === "square") {
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
        <option  class="opt3" value="c">CC</option>`
        document.querySelector('#sel').innerHTML = html
        let slc = `
        <p></p>
        <input type="number" id="inp1">
        `
        document.querySelector('.opt').innerHTML = slc
    }
    else if (document.querySelector('#select').value === "Rectangle") {
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        <p id="bb"></p>
        <input type="number" id="inp2">
        `
        document.querySelector('.opt').innerHTML = scls
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
            `
        document.querySelector('#sel').innerHTML = html
    }

    else if (document.querySelector('#select').value === "Paralellogram") {
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        <p id="bb"></p>
        <input type="number" id="inp2">
        `
        document.querySelector('.opt').innerHTML = scls
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
            `
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Sphere") {
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
        <option class="opt2" value="Volume">Volume</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Esclipse"){
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        <p id="bb"></p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
       
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    } 
    else if (document.querySelector('#select').value === "Hexagon"){
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        <p id="bb"></p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">Area</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Pentagons"){
        let scls = `
        <p></p>
        <input type="number" id="inp1">
        <p id="bb"></p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">Area</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }
}

document.getElementById('sel').onclick = function(){
    if(select.value === "ScaleneTriangle"){
        if (sel.value === 'area'){
            document.getElementById('inp3').style.display = 'none .'
        }
    }
}