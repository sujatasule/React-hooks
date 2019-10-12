import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import NavBar from './components/NavBar'
import Footer from './components/Footer'


function Course({ course, index, upvoteCourse, downvoteCourse }) {
  return (
    <div>
      <Card style={{maxWidth: '500px', marginBottom: '10px'}}>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={ course.courseImage }
                    title={ course.title }
                    />
        <CardContent>
          <Typography variant="headline" component="h2">{ course.title }</Typography>
          <Typography component="p" color="textSecondary">{ course.description }</Typography>
          <br />
          <Typography color="textSecondary">{ course.upvote_count }
          <Icon color="primary" onClick={() => upvoteCourse(index)}>

          </Icon>

          &nbsp;&nbsp;
          <span>{ course.downvote_count }</span>
          <Icon color="primary" onClick={() => downvoteCourse(index)}>

          </Icon>
          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}

function App() {
  const [courses, setCourses] = useState([
    {
      title: "Server Side Rendering with React and Redux",
      description: "Build React, Redux, and React Router apps using Server Side Rendering (SSR), Isomorphic, and Universal JS techniques",
      courseImage: 'react01.png',

    },
    {
      title: "React - The Complete Guide",
      description: "Dive in and learn React from scratch! Learn Reactjs, Redux, React Routing, Animations, Next.js basics and way more!",
      courseImage: 'react01.png',

    },
    {
      title: "The Complete React Web Developer Course (with Redux)",
      description: "Learn how to build and launch React web applications using React v16, Redux, Webpack, React-Router v4, and more!",
      courseImage: 'react01.png',

    }
  ]);

  const upvoteCourse = index => {
    const newCourse = [...courses];
    newCourse[index].upvote_count++;
    setCourses(newCourse);
  };

  const downvoteCourse = index => {
    const newCourse = [...courses];
    newCourse[index].downvote_count++;
    setCourses(newCourse);
  };

  return (
    <div className="app">
      <NavBar />
      <div>
        <Grid container spacing={24} style={{padding: 24}}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={12} lg={4} xl={3}>
              <Course
                key={index}
                index={index}
                course={course}
                upvoteCourse={upvoteCourse}
                downvoteCourse={downvoteCourse}
                />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default App;
