using Streamish.Models;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
       
        UserProfile GetByIdWithVideos(int id);
        UserProfile GetById(int id);

        void Add(UserProfile userProfile);
        void Update(UserProfile userProfile);
        void Delete(int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}