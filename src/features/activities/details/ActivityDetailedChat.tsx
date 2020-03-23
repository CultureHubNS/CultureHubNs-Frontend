import React, { Fragment } from 'react'
import { Segment, Header, Form, Button, Comment } from 'semantic-ui-react'

const ActivityDetailedChat = () => {

    return (
        <Fragment>
            <Segment
              textAlign='center'
              attached='top'
              inverted
              color='teal'
              style= {{border: 'none' }}
              >
                  <Header>Chat about this event</Header>
              </Segment>
              <Segment attached>
                  <Comment.Group>
                      <Comment>
                          <Comment.Avatar src='/assets/user.png' />
                          <Comment.Content>
                              <Comment.Author as='a'>Matt</Comment.Author>
                              <Comment.Metadata>
                                  <div>Today ay 5:42 PM</div>
                              </Comment.Metadata>
                              <Comment.Text> How artistic! </Comment.Text>
                              <Comment.Actions>
                                  <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                          </Comment.Content>
                      </Comment>

                      <Comment>
                          <Comment.Avatar src='/assets/user.png' />
                          <Comment.Content>
                              <Comment.Author as='a'>Joe Henderson</Comment.Author>
                              <Comment.Metadata>
                                  <div>5 days ago</div>
                              </Comment.Metadata>
                              <Comment.Text> Dude this is awsome. Thanks so much </Comment.Text>
                              <Comment.Actions>
                                  <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                          </Comment.Content>
                      </Comment>

                      <Form reply>
                          <Form.TextArea />
                          <Button 
                            content='Add reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                            />
                      </Form>
                  </Comment.Group>
              </Segment>
        </Fragment>
    )
}
    
export default ActivityDetailedChat