export type User = {
  username: string    
  avatar:   Avatar
  comment:  Comments[]
  replies:  Replies[]
}

export type Avatar = {
  png:   string,
  webp:   string,
}

export type Comments = {
  content:   string
  createdAt: Date  
  updatedAt: Date 
  score:     number
  authorId:  number
  author:    User      
  replies:   Replies[]
}

export type Replies = {
  content:   string
  createdAt: Date  
  updatedAt: Date 
  score:     number
  commentId: number
  comment:   Comments   
  authorId:  number
  author:    User      
}
