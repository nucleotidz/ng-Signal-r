using API.BL.Interface;
using API.Model;
using System.Collections.Generic;
using System.Linq;
namespace API.BL
{
    public class AccountBL : IAccountBL
    {
        public static List<AccountModel> accounts = new List<AccountModel>();
        public List<AccountModel> Get()
        {
            return accounts;
        }

        public bool Save(AccountModel model)
        {
            accounts.Add(new AccountModel
            {
                AccountNumber = model.AccountNumber,
                Amount = model.Amount,
                Name = model.Name

            });
            return true;
        }

        public bool Update(string AccountNumber, string Amount)
        {
            if (accounts != null && accounts.Any())
            {
                AccountModel model = accounts.Where(account => account.AccountNumber == AccountNumber).FirstOrDefault();
                model.Amount = Amount;
                return true;
            }
            return false;
        }

        public bool Delete(string AccountNumber)
        {
            if (accounts != null && accounts.Any())
            {
                AccountModel model = accounts.Where(account => account.AccountNumber == AccountNumber).FirstOrDefault();
                accounts.Remove(model);
                return true;
            }
            return false;
        }
    }
}
