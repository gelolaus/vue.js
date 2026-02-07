// API client for JSONPlaceholder REST API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * Fetch all comments from JSONPlaceholder
 * @returns {Promise<Array>} Array of comment objects
 */
export async function getComments() {
  try {
    const response = await fetch(`${API_BASE_URL}/comments`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    // Limit to first 20 comments for better display
    return data.slice(0, 20)
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

/**
 * Create a new comment (simulated by JSONPlaceholder)
 * @param {Object} commentData - Comment data with name and body properties
 * @returns {Promise<Object>} Created comment object
 */
export async function createComment(commentData) {
  try {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}

/**
 * Fetch all users from JSONPlaceholder
 * @returns {Promise<Array>} Array of user objects
 */
export async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

/**
 * Fetch all posts from JSONPlaceholder
 * @returns {Promise<Array>} Array of post objects
 */
export async function getPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
