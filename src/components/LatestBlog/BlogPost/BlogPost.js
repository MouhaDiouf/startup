import React from 'react';
import BlogPostStyles from './styles.module.scss';
import { FaUserAlt, FaCalendar, FaComment, FaUser } from 'react-icons/fa';
function BlogPost({
  title,
  categories,
  author,
  date,
  comments,
  description,
  img,
}) {
  return (
    <div className={BlogPostStyles.container}>
      <div
        className={BlogPostStyles.imageContainer}
        style={{ backgroundImage: `url(${img})` }}
      >
        <ul className={BlogPostStyles.categories}>
          {categories.map((category) => (
            <li>{category}</li>
          ))}
        </ul>
      </div>
      <div className={BlogPostStyles.textContainer}>
        <h3>{title}</h3>
        <ul className={BlogPostStyles.postDetails}>
          <li>
            <span>
              <FaUserAlt />
            </span>
            {author}
          </li>
          <li>
            <span>
              <FaCalendar />
            </span>
            {date}
          </li>
          <li>
            <span>
              <FaComment />
            </span>
            {comments}
          </li>
        </ul>
        <p>{description}</p>
        <div className={BlogPostStyles.readMore}>
          <div className={BlogPostStyles.line}></div>
          <span>Read More {'>>'}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
