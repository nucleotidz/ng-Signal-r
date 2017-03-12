using API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.BL.Interface
{
    public interface IAccountBL
    {
        List<AccountModel> Get();

        bool Save(AccountModel model);

        bool Update(string AccountNumber,string Amount);

        bool Delete(string AccountNumber);
    }
}
