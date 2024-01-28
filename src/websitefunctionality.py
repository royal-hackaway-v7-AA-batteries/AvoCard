import pandas as pd
import datetime

columns = ["Balance", "Buyer_id", "Seller_id", 
           "Listing_1", "Listing_2", "Listing_3",
           "Price1", "Price2", "Price3","is_ambasador","last_payed"]   
df = pd.DataFrame(columns=columns)                                              # Create empty DataFrame with columns

Income = { 
    "90 (A*)" : 500,
    "80 (A)" : 450,
    "70 (B)" : 400,
    "60 (C)" : 350,
    "50 (D)" : 300,
    "40 (E)" : 200,
    "Student Ambassador" : 200,
    "Volunteered" : 150,
    "Attending Tutorial" : 20,
}

Reward = { 
    "Free Meal" : 1000,
    "SU Ticket" : 900,
    "Med Ticket" : 800,  
    "20 Off SU Product" : 750,
    "Free Notebook" : 500,
    "Free Pencil" : 250,
}

#Income Functions
def income_immediate(obtained, id):
    balance_buyer = df["Balance"].loc[df["Buyer_id"]==id]   # Shortcut
    for key in Income:
        if obtained == Income[key]:
            balance_buyer -= Income[key]
    return ({"error": "Transaction Completed"})

def ambassador_income(id):
    current_month = datetime.date.today().strftime('%B %Y')
    is_ambasador = df["is_ambassador"].loc[df["Buyer_id"]==id]==1
    # If ambassador, pay. If not, fuck off
    if is_ambasador and df["last_payed"].loc[df["Buyer_id"]==id]==1:
        df["Balance"].loc[df["Buyer_id"]==id] += 200
        df["is_ambassador"].loc[df["last_payed"]==id] = current_month
    if is_ambasador == 0: 
        df["is_ambassador"].loc[df["last_payed"]==id] = 0
    return ({"error": "Salary Delivered"})

# Treasure Chest Functions
def redeem(choice, id):
    balance_buyer = df["Balance"].loc[df["Buyer_id"]==id]   # Shortcut
    for key in Income:
        if choice == Reward[key]:
            balance_buyer -= Reward[key]
    return ({"error": "Transaction Completed"})

# Marketplace Functions 
def listing(item, price, id):
    # Finding where to place item in which listing
    seller_id = df["Seller_id"]==id
    if df["Listing_1"] <= 0: 
        df["Listing_1"].loc[seller_id] = item, 
        df["Price1"].loc[seller_id] = price,
    elif df["Listing_2"] <= 0: 
        df["Listing_2"].loc[seller_id] = item, 
        df["Price2"].loc[seller_id] = price,
    elif df["Listing_3"] <= 0: 
        df["Listing_"].loc[seller_id] = item, 
        df["Price3"].loc[seller_id] = price,
    return ({"Shipping Succeded"})

def transaction(Balance, Buyer_id, Seller_id, Price):
    if Balance < Price: return ({"error": "Insufficient funds"})    # Check customer balance
    df["Balance"].loc[df["Buyer_id"]==Buyer_id] -= Price            # Removed money from buyer
    df["Balance"].loc[df["Seller_id"]==Seller_id] += Price          # Removed money from seller
    return ({"message": "Transaction successful"}) 