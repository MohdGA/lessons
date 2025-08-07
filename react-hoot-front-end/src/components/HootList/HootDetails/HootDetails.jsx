import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as hootService from '../../../services/hootService';
import CommentForm from '../../CommentForm/CommentForm';


const HootDetails = (props) => {

  const { hootId } = useParams()

  const [hoot, setHoot] = useState()
  
  useEffect(() => {
    // fetch a single hoot
    const fetchHoot = async () => {
      // call the hoot service
      const hootData = await hootService.show(hootId)
      setHoot(hootData)
    }
    fetchHoot()
  }, [hootId])

    const handleComment = async (commentFormData) => {
      const newComment = await hootService.createComment(hootId, commentFormData);
      setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
    };
  if (!hoot) return <main>Loading...</main>

  return (
    <main>
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1>{hoot.title}</h1>
        <p>
          {hoot.author.username} posted on {new Date(hoot.createdAt).toLocaleDateString()}
        </p>
        <p>{hoot.text}</p>

       {hoot.author._id === props.user._id && (
          <>
            <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
            <button onClick={() => props.handleDeleteHoot(hootId)}>Delete</button>
          </>
        )}
      </header>
      <h2>Comments</h2>
      <CommentForm handleComment= {handleComment}/>

      {!hoot.comments.length && <p>There are no comments</p>}

      {hoot.comments.map((comment ,idx) => 
        <p key={idx}>{comment.text}</p>
      )}
    </main>
  )
}

export default HootDetails