var width = 1000,
    height = 1000;

var svg = d3.select('body')
            .append('svg')
            .attr('width',width)
            .attr('height',height)   

d3.select('svg')
    .append('rect')
    .attr('fill','black')
    .attr('width',width)
    .attr('height',height)
var numNodes = 220
var nodes = d3.range(numNodes).map(function(d) {
      return {radius: Math.random() * 25}
    })
// var simulation=d3.forceSimulation(nodes)
//     .force('charge',d3.forceManyBody())
//     .force('center',d3.forceCenter(width/2,height/2))
//     .on('tick',ticked);

var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(1000))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(function(d) {
      return d.radius
    }))
    .on ('tick',ticked)

function ticked(){
    var u =d3.select ('svg')
        .selectAll('circle')
        .data(nodes)

    u.enter()
        .append('circle')
        .attr('r',(d)=>d.radius)
        .merge(u)
        .attr('cx',(d)=>d.x)
        .attr('cy',(d)=>d.y)
        .attr('fill',(d,i)=>'rgb('+(i)+',' +(i*0)+ ','+ (i)+  ')')
    u.exit().remove()
}

simulation.force('charge',d3.forceManyBody().strength(300))


