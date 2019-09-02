class Snake {
  
  constructor(){
    this.body = [];
    this.length = 1 ;// length of the snake and we want to add something to the array
    this.body[0] = createVector(0,0);
    this.xdir = 0 ; 
    this.ydir = 0 ;
    
  }
grow()
  {
  this.len++ ; 
  let head = this.body[this.body.length - 1].copy();
  this.body.push(head);
  }
update(){
  let head = this.body[this.body.length - 1].copy();
  this.body.shift();
  head.x += this.xdir;
  head.y += this.ydir;
  this.body.push(head);
  if(head.x == w )
  {
  head.x = 0 ; 
  }
  else if(head.x < 0 )
  {
   head.x = w ;
  }
  else if (head.y > h-1 )
  {
  head.y = 0;
  }
  else if(head.y < 0)
  {
  head.y  = h;
  }
  print
  
  
}
  endGame()
  {
  let x = this.body[this.body.length - 1].x;
  let y = this.body[this.body.length - 1 ].y;
  
  for(let i = 0 ; i < this.body.length - 1 ; i++)
  {
   let part = this.body[i];
    if(part.x == x  && part.y == y)
       {
        return true; 
       }
    
  }
    
    
    
  }
  
setDir(x,y)
{
  
  
    this.xdir = x ; 
  this.ydir = y ;
  }
  eat(pos)
  {
  let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if(x == pos.x && y == pos.y)
    {
      this.grow();
      print("Food eaten");
      return true;
    }
}
  
  show()
  {
    for(let i = 0 ; i < this.body.length; i++)
    {
      if(i == this.body.length - 1 )
      {fill(100);
       rect(this.body[i].x, this.body[i].y, 1, 1);
        continue;
      }
      fill(255,255,153);
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  
  }
}