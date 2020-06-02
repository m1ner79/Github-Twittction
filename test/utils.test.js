
const { getDefaultMessage } = require('../src/utils');

test('should return defaultMessage', () => {
  const payload = {
    commits: [{
      url: 'test url'
    }
    ],
    repository: {
      full_name: 'Codertocat/Hello-World' 
    },
    pusher: {
      name: 'Codertocat'
    }
  };
  const defaultMessage = getDefaultMessage('push', payload);
  expect(defaultMessage).toEqual('Codertocat just created a commit to Codertocat/Hello-World. More details are available here: test url');
});

test('should return an error if event not supported', () => {
  const payload = {
    commits: [{
      url: 'test url'
    }
    ],
    repository: {
      full_name: 'Codertocat/Hello-World' 
    },
    pusher: {
      name: 'Codertocat'
    }
  };
  expect(() => getDefaultMessage('test', payload)).toThrow('test is not supported with default message. Provide custom message using tweeter_status input parameter.');
});